import { Avatar, Badge, Card, Divider, Input, Radio } from '@geist-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingLayout } from '../../components/atoms/LoadingLayout';
import { ErrorView } from '../../components/molecules/ErrorView';
import { IssueState, useGetIssuesQuery } from '../../gql';
import { useBasePathFromUrl, useIssueState, useRepoAndOwnerUrlSlugs, useSearchKeyword } from '../../hooks';
import { WithSharedHeader } from '../SharedHeader';

const Issues = () => {
    const currentUrl = useBasePathFromUrl();
    const { searchKeyword, setSearchKeyword, debouncedSearchKeyword } = useSearchKeyword();
    const { issueState, setIssueState } = useIssueState()

    const { owner, repo } = useRepoAndOwnerUrlSlugs();
    const query = useGetIssuesQuery({
        variables: {
            query: `
                repo:${owner}/${repo}
                is:issue
                is:${issueState.toLowerCase()}
                ${debouncedSearchKeyword}
            `.trim()
        },
        fetchPolicy: "cache-first",
    });

    if (query.loading) {
        return <LoadingLayout />
    }

    if (query.data) {
        return (
            <Container>
                <FilterContainer>
                    <div>
                        Search in title or content:
                        <Input placeholder="type search term" width="100%" value={searchKeyword} onChange={({ target: { value } }) => setSearchKeyword(value)} data-testid="search-repo" />
                    </div>
                    <div>
                        State:
                        <Radio.Group value={issueState} onChange={value => setIssueState(value as IssueState)} useRow>
                            <Radio value={IssueState.Open}>Open</Radio>
                            <Radio value={IssueState.Closed}>Closed</Radio>
                        </Radio.Group>
                    </div>
                </FilterContainer>

                <Divider>
                    Issues: <Badge>{query.data.search.issueCount}</Badge>
                </Divider>

                <Card data-testid="issues-list">
                    {query.data.search.nodes?.map((node, index) => {
                        return node?.__typename === "Issue" && (
                            <IssueWrapper key={index} hoverable>
                                <StyledLink to={`${currentUrl}/issues/${node.number}`} data-testid="issue-link">
                                    <IssueTitle data-testid="issue-title">
                                        {node?.title}
                                    </IssueTitle>
                                    <Author>
                                        <Avatar src={node.author?.avatarUrl} size="mini" />
                                        <span>
                                            Opened on {new Date(node.createdAt).toDateString()} by <i>{node.author?.login}</i>
                                        </span>
                                    </Author>
                                </StyledLink>
                            </IssueWrapper>
                        )
                    })}
                </Card>
            </Container>
        )
    }


    if (query.error) {
        return <ErrorView message={query.error?.message} />
    }

    return null;
}
export default WithSharedHeader(Issues);

const Container = styled.section`
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
`

const FilterContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    gap: 2rem;
    justify-content: center;
`


const IssueTitle = styled.div`
    margin-bottom: 0.5rem;
`;

const Author = styled.div`
    color: #333;
    font-size: 12px;

    span {
        margin-left: 0.5rem;
    }
`;

const IssueWrapper = styled(Card)`
  min-height: 75px;
  margin-bottom: 0.5rem !important;
`

const StyledLink = styled(Link)`
    transition: all 0.3s ease-in-out;
    border-bottom: solid 1.5px transparent;

    &:hover {
        color: #04b177 !important;
        border-color: #999;
    }
`

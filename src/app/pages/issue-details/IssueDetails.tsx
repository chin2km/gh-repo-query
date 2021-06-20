import { Avatar, Code, Collapse, Divider, Link } from '@geist-ui/react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { LoadingLayout } from '../../components/atoms/LoadingLayout';
import { ErrorView } from '../../components/molecules/ErrorView';
import { useGetIssueDetailsQuery } from '../../gql';
import { useRepoAndOwnerUrlSlugs } from '../../hooks';
import { WithSharedHeader } from '../SharedHeader';

const IssueDetails = () => {
    const { owner, repo } = useRepoAndOwnerUrlSlugs();
    const query = useGetIssueDetailsQuery({
        variables: {
            repo,
            owner,
            issueId: Number(useParams<{ id: string }>().id)
        },
        fetchPolicy: "cache-first",
    });

    if (query.loading) {
        return <LoadingLayout />
    }

    if (query.data?.repository?.issue) {
        const issue = query.data.repository.issue;
        return (
            <Container>
                <Code block>
                    <Commenter href={issue.author?.url} target="_blank">
                        <Avatar stacked src={issue.author?.avatarUrl} size="medium" />
                        <h3>{` ${issue.author?.login} `}</h3>
                        <h6><i>{`opened this issue on ${new Date(issue.createdAt).toDateString()}`}</i></h6>
                    </Commenter>
                    <h2 data-testid="issue-title" dangerouslySetInnerHTML={{ __html: issue.title }} />
                    <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
                </Code>

                <Divider>Comments {issue.comments.totalCount}</Divider>

                <Collapse.Group accordion={false}>
                    {issue.comments.nodes?.map((comment, index) => {
                        return (
                            <CommentsWrapper key={index}>
                                <Commenter href={comment?.author?.url} target="_blank">
                                    <Avatar stacked src={comment?.author?.avatarUrl} size="medium" />
                                </Commenter>
                                <Collapse
                                    initialVisible
                                    shadow
                                    title={comment?.author?.login!}
                                    subtitle={`commented on ${(new Date(comment?.createdAt)).toDateString()}`}>
                                    <div dangerouslySetInnerHTML={{ __html: comment?.bodyHTML }} />
                                </Collapse>
                            </CommentsWrapper>
                        )
                    })}
                </Collapse.Group>
            </Container>
        )
    }

    if (query.error) {
        return <ErrorView message={query.error?.message} />
    }

    return null;
}
export default WithSharedHeader(IssueDetails);

const Commenter = styled(Link)`
    box-sizing: border-box;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center !important;
    align-items: center !important;
    h3, h6 {
        margin: 0;
    }
`;

const CommentsWrapper = styled.aside`
    width: 80%;
    margin: auto;
    contain: layout;
    content-visibility: visible;

    ${Commenter} {
        margin-left: -5rem !important;
        margin-top: 1.5rem !important;
        position: absolute;
    }
`;

const Container = styled.section`
    width: 80%;
    margin: auto;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 18px !important;
    }
    h3 {
        font-size: 16px !important;
    }
`;
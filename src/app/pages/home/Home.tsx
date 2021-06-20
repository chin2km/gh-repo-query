import { Avatar, Card, Description, Divider, Grid, Link } from '@geist-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingLayout } from '../../components/atoms/LoadingLayout';
import { ErrorView } from '../../components/molecules/ErrorView';
import { useGetRepositoryQuery } from '../../gql';
import { useBasePathFromUrl, useRepoAndOwnerUrlSlugs } from '../../hooks';
import { WithSharedHeader } from '../SharedHeader'

const Home = () => {
    const { owner, repo } = useRepoAndOwnerUrlSlugs();

    const query = useGetRepositoryQuery({
        variables: {
            repo,
            owner,
        },
        fetchPolicy: "cache-first"
    });
    const baseRepoUrl = useBasePathFromUrl();

    if (query.loading) {
        return <LoadingLayout />
    }

    if (query.data) {
        const { description, homepageUrl, name, openGraphImageUrl, owner, pullRequests, stargazers, watchers, issues, url } = query.data.repository!;
        return (
            <Container>
                <Link href={homepageUrl} target="_blank">
                    <Avatar isSquare width={435} height={200} size="large" src={openGraphImageUrl} style={{ objectFit: "cover" }} />
                </Link>

                <Divider />

                <Description data-testid="repository-description" title={`${name} by ${owner.login}`} content={<h6>{description}</h6>} />

                <Divider />

                <Grid.Container gap={2} justify="space-around">
                    <Grid>
                        <Link href={`${url}/stargazers`} target="_blank">
                            <Card hoverable shadow type="dark">
                                <h3>Stars</h3>
                                <h1>{stargazers.totalCount}</h1>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link href={`${url}/watchers`} target="_blank">
                            <Card hoverable shadow type="dark">
                                <h3>Watchers</h3>
                                <h1>{watchers.totalCount}</h1>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link href={`${url}/pulls`} target="_blank">
                            <Card hoverable shadow type="dark">
                                <h3>Pull Requests</h3>
                                <h1>{pullRequests.totalCount}</h1>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid>
                        <RouterLink to={`${baseRepoUrl}/issues`}>
                            <Card hoverable shadow type="error">
                                <h3>Issues</h3>
                                <h1>{issues.totalCount}</h1>
                            </Card>
                        </RouterLink>
                    </Grid>
                </Grid.Container>
            </Container>
        )
    }

    if (query.error) {
        return <ErrorView message={query.error?.message} />
    }

    return null;
}
export default WithSharedHeader(Home);

const Container = styled.section`
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    min-height: 80vh;
`

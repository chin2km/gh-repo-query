import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDebounce } from ".";
import { IssueState } from "../gql";

export const useRepoAndOwnerUrlSlugs = () => {
    return useParams<{ owner: string; repo: string }>();
}

export const useBasePathFromUrl = () => {
    const { owner, repo } = useRepoAndOwnerUrlSlugs();
    return `/${owner}/${repo}`
}

export const useRepositoryNameState = () => {
    const { repo } = useRepoAndOwnerUrlSlugs();
    const [repoName, setRepoName] = useState(repo || process.env.REACT_APP_DEFAULT_REPO!)
    const debouncedRepoName = useDebounce(repoName);

    return {
        repoName,
        debouncedRepoName,
        setRepoName
    };
}

export const useOwnerNameState = () => {
    const { owner } = useRepoAndOwnerUrlSlugs();
    const [ownerName, setOwnerName] = useState(owner || process.env.REACT_APP_DEFAULT_OWNER!)
    const debouncedOwnerName = useDebounce(ownerName);

    return {
        ownerName,
        debouncedOwnerName,
        setOwnerName
    };
}

export const useSearchKeyword = () => {
    const { replace, location: { search } } = useHistory()
    const params = new URLSearchParams(search);
    const [searchKeyword, setSearchKeyword] = useState(params.get("search") ?? "")
    const debouncedSearchKeyword = useDebounce(searchKeyword);


    useEffect(() => {
        const params = new URLSearchParams(search);
        params.set("search", debouncedSearchKeyword);
        replace({ search: params.toString() });
    }, [debouncedSearchKeyword, replace, search])

    return {
        searchKeyword,
        debouncedSearchKeyword,
        setSearchKeyword
    };
}

export const useIssueState = () => {
    const { replace, location: { search } } = useHistory()
    const params = new URLSearchParams(search);
    const issueStateInUrl = params.get("state") === IssueState.Closed ? IssueState.Closed : IssueState.Open;
    const [issueState, setIssueState] = useState<IssueState>(issueStateInUrl)

    useEffect(() => {
        const params = new URLSearchParams(search);
        params.set("state", issueState);
        replace({ search: params.toString() });
    }, [issueState, replace, search])

    return {
        issueState,
        setIssueState
    };
}

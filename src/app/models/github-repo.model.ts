export interface RepositorySearchResponse {
    items: Repository[];
}

export interface Repository {
    id: string;
    name: string;
    description: string;
    html_url: string;
    language: string;
}

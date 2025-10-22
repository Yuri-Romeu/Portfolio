import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Repo {
     id: number;
     name: string;
     html_url: string;
     description: string | null;
     type?: string;
     stargazers_count: number;
     forks_count: number;
     open_issues_count: number;
     language: string | null;
}

export interface RepoContent {
     name: string;
     path: string;
     type: 'file' | 'dir';
     download_url: string | null;
}

export interface RepoLanguages {
     [language: string]: number;
}

export interface CommitActivity {
     total: number;
     week: number;
     days: number[];
}

export const githubApi = createApi({
     reducerPath: 'githubApi',
     baseQuery: fetchBaseQuery({
          baseUrl: 'https://api.github.com/',
          prepareHeaders: headers => {
               const token = import.meta.env.VITE_GITHUB_TOKEN;
               if (token) headers.set('Authorization', `token ${token}`);
               return headers;
          },
     }),
     endpoints: builder => ({
          getUserRepos: builder.query<Repo[], string>({
               query: username => `users/${username}/repos`,
          }),

          getRepoContents: builder.query<RepoContent[], { username: string; project: string }>({
               query: ({ username, project }) => `repos/${username}/${project}/contents/`,
          }),

          getRepoInfoPromise: builder.query<Repo, { username: string; project: string }>({
               query: ({ username, project }) => `repos/${username}/${project}`,
          }),

          getLanguagesPromise: builder.query<
               RepoLanguages[],
               { username: string; project: string }
          >({
               query: ({ username, project }) => `repos/${username}/${project}/languages`,
          }),

          getCommitsPromise: builder.query<CommitActivity[], { username: string; project: string }>(
               {
                    query: ({ username, project }) =>
                         `repos/${username}/${project}/stats/commit_activity`,
               },
          ),
     }),
});

// Hooks automáticos:
export const {
     useGetUserReposQuery,
     useGetRepoContentsQuery,
     useGetRepoInfoPromiseQuery,
     useGetLanguagesPromiseQuery,
     useGetCommitsPromiseQuery,
} = githubApi;

import { baseApi } from "../baseApi";

interface CsvDownloadParams {
  std: string;
  etd: string;
}

const CsvApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    csvDownload: builder.query<Blob, CsvDownloadParams>({
      query: ({ std, etd }) => ({
        url: `/download/get-csv`,
        method: "GET",
        params: { std, etd },
        responseHandler: (response) => response.blob(),
      }),
    }),

    getAllPrizeDraw: builder.query({
      query: () => ({
        url: `/prize-draw`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyCsvDownloadQuery, useGetAllPrizeDrawQuery } = CsvApi;

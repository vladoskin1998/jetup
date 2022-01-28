export interface DataInterface {
  data: WordInterface[],
  historyData: HistoryDataInterface[]
}

export interface WordInterface {
  wordUA: string, wordEN: string, wordId: number
}


export interface HistoryDataInterface {
  historyId: number,
  date: string,
  variants: HistoryDataInterfaceVariants[]
}

export interface HistoryDataInterfaceVariants{
  variant: WordInterface[],
  change: WordInterface,
  right: WordInterface,
}
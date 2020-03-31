export type ComboBoxDataProviderCallback = (items: Array<unknown>, size: number) => void;

export type ComboBoxDataProviderParams = {
  page: number;

  pageSize: number;

  filter: string;
}

export type ComboBoxDataProvider = (params: ComboBoxDataProviderParams, callback: ComboBoxDataProviderCallback) => void;

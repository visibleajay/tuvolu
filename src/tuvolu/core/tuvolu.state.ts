
export interface IDataState {
    imageUrl: String;
    infoUrl: String;
    rating: number;
    genres: String[];
    summary: String;
}

export interface ITuvoluState{
    searchText: String;
    loading: Boolean;
    data: IDataState[];
}


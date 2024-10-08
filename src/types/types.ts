export interface ItunesType {
    resultCount: number,
    results: Result[]
}

export interface Result {
    wrapperType:            string;
    collectionType:         string;
    artistId:               number;
    collectionId:           number;
    amgArtistId:            number;
    artistName:             string;
    collectionName:         string;
    collectionCensoredName: string;
    artistViewUrl:          string;
    collectionViewUrl:      string;
    artworkUrl60:           string;
    artworkUrl100:          string;
    collectionPrice:        number;
    collectionExplicitness: string;
    contentAdvisoryRating:  string;
    trackCount:             number;
    copyright:              string;
    country:                string;
    currency:               string;
    releaseDate:            Date;
    primaryGenreName:       string;
}
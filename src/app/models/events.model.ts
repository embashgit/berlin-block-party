
export interface IEventFeedItems {
    title?: string;
    link?: string;
    author?: string;
    description?: string;
    categories?: string[] | any;
    pubDate?: Date;
    content?: string;
    expiryDate?: Date;
    thumbnail?: string;
    guid?:string;
}

export class EventFeed {
    author?:string;
    title?:string;
    url?:string;
    link?:string;
    description?:string;
    image?:string;

    constructor(args:{
     title?: string;
     url?: string;
     image?: string;
     link?:string;
     description?: string
     author?: string
    }){
    this.title = args.title
    this.author = args.author
    this.description = args.description
    this.link = args.link
    this.image = args.image
    this.url = args.url
    }
}

export interface IFeed{
    feed:EventFeed
    items:IEventFeedItems[]
}

export interface ILoader{
    loading:boolean,
    error: null |string;
    pageSize:number;
}

export interface Iparams {
    page:number;
}
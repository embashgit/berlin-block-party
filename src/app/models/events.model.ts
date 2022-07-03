
export class EventFeedItems {
    title?: string;
    link?: string;
    author?: string;
    description?: string;
    pubDate?: string;
    expiryDate?: Date;
    thumbnail?: string;
    guid?:string;
    constructor(args:{
       title:IelementValue
       link:IelementValue
       "dc:creator": IelementValue
       description:IelementValue
       guid:IelementValue
       pubDate:IelementValue
    }){
        this.title = args.title._text;
        this.author = args["dc:creator"]._text
        this.description = args.description._text;
        this.pubDate = args.pubDate._text
        this.guid = args.guid._text
        this.link = args.link._text
    }

}

interface Iref{
    href:string;
}
interface IelementValue{
    _text?:string;
    'atom:link'?:Iref
    'dc:creator'?:string
    _attributes?:Iref

}

export class EventFeed {
    author?:string;
    title?:string;
    link?:string
    language?:string;
    feed: EventFeedItems[]

    constructor(args:{
     title: IelementValue;
     link:IelementValue;
     language: IelementValue
     "atom:link": IelementValue
     item:any[]
    }){
    this.author = args["atom:link"]._attributes?.href
    this.title = args.title['_text']
    this.link = args.link['_text'];
    this.language = args.language._text?.toString()
    this.feed = [...args.item.map((feed:any)=> new EventFeedItems(feed))]
    }
}

export interface IFeed{
    feed:EventFeed
    items: EventFeedItems[]
}

export interface Ilocation{
    name:string
    value:string
}
export interface ILoader{
    loading:boolean,
    error: boolean;
    pageSize:number;
    errorMessage:string
}

export interface Iparams {
    page:number;
}
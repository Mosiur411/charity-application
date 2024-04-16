export interface ICharity {
  id: number
  url: string
  title: string
  subTitle: string
  description: string
  image: string
  topPoints: ICharityPoint[]
  content: ICharityContent[]
  bottomPoints: ICharityPoint[]
  topPointImage: string
  bottomPointImage: string
  conclusion: string
}

export interface ICharityPoint {
  id: number
  title: string
  desc: string
}
export interface ICharityContent {
  id: number
  title: string
  fastWord: string
  boldText: string
  desc: string
}

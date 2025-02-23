
export interface QuestionData {
  id: string;
  triviaId:number,
  order:number,
  question:string,
  bg_img:string,
  answer:string
  createdAt: Date;
  updatedAt: Date;
}

export interface GameData {
    id: number;
    title: string;
    game_id: string;
    bg_img: string;
    text_colour: string;
    sliderTime: number;
    userAcctId: string;
    createdAt: Date;
    updatedAt: Date;
    Question:QuestionData[];
}



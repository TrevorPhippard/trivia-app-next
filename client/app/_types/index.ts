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
    Question: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        triviaId: number;
        answer: string;
    }[];
}
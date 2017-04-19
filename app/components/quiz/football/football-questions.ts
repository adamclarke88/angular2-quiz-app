export class FootballQuestion {
    questionNumber: number;
    text: string;
    hint: string;
    hintText: string;
    answer: string;
    options: string[];
    status: string;
}

export const FootballQuestions: FootballQuestion[] = [
    {
        questionNumber: 1, 
        text: "Which British team’s ground is in two countries?",
        hint: "They play their football at the 'Deva Stadium'.",
        hintText: "",
        answer: "Chester",
        options: ["Macclesfield Town", "Crewe Alexandra", "Chester", "Wrexham"],
        status:""
    },
    {
        questionNumber: 2, 
        text: "Who is the only player who has scored a hat-trick in all of the top 4 English divisions, the League Cup, the FA Cup and for their country?",
        hint: "In the twilight of his career, he played for 'Vancouver Whitecaps'.",
        hintText: "",
        answer: "Robert Earnshaw",
        options: ["Robert Earnshaw", "Kevin Phillips", "Steven Fletcher", "Hal-Robson Kanu"],
        status:""
    },
    {
        questionNumber: 3, 
        text: "Which former top flight player has played in the all 4 of the top English divisions, the Conference, Champions League, UEFA Cup and La Liga in Spain?",
        hint: "This player has a runners-up medal in the 'FIFA Club World Cup'.",
        hintText: "",
        answer: "Steve Finnan",
        options: ["Ian Harte", "Steve Finnan", "Benito Carbone", "Trevor Francis"],
        status:""
    },
    {
        questionNumber: 4, 
        text: "Which one of these clubs has won the most Champions League titles?",
        hint: "It's not man united! ha.",
        hintText: "",
        answer: "Liverpool",
        options: ["Man United", "Juventus", "Liverpool", "Ajax"],
        status:""
    },
]
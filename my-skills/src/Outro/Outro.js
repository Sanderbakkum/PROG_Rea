import "./Outro.css";
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import question from "../Question/Question";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Outro = (props) => {
    console.log(props.questionsAndAnswers)
    let questions = []
    let ratings = [];
    props.questionsAndAnswers.map(question => {
        questions.push("Vraag #" + question.number);
        ratings.push(question.rating)
    })
    let data = {
        labels: questions,
        datasets:[{
            label: "Mijn score",
            data: ratings,
            backgroundColor: [
                'rgb(222,222,68)',
                'rgb(222,222,68)',
                'rgb(255,146,28)',
                'rgb(255,146,28)',
                'rgb(62,188,199)',
                'rgb(62,188,199)',
                'rgb(38,149,227)',
                'rgb(38,149,227)',
            ]
        }
        ]
    }
    return(
        <article className="outro">
            <h1>De uitslag:</h1>
            <Bar data={data}></Bar>
        </article>
    )
}

export default Outro;
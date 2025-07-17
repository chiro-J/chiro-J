import Counter from "./hooks/Counter";
import TitleUpdater from "./hooks/TitleUpdater";
import Detector from "./hooks/Detector";
import Welcome from "./hooks/Welcome";
import Timer from "./hooks/Timer";
import Width from "./hooks/Width";


export default function App1() {
    return (
        <main>
            <Counter />
            <TitleUpdater />
            <Detector />
            <Welcome />
            <Timer />
            <Width />
        </main>
    );
}

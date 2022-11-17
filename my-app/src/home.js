import Assignment from "./assign";
import Chat from "./chat";

function Home(){
    return <div className="grid grid-flow-col grid-cols-3 h-10">
        <div className="col-span-2">
            <Assignment />
        </div>
        <div className="col-span-1">
            <Chat />
        </div>
    </div>
}

export default Home;
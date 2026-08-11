import PageHeader from "../PageHeader/PageHeader";

function Welcome({isOpen, onToggle}){
    return(
        <div id="welcome">
            
            <PageHeader  title="Welcome from page header"/>

             {/* <button onClick={onToggle}>
        Welcome
      </button> */}

      {isOpen && (
        <div>
          <p>Welcome to St. Kidanemhret Ethiopian Orthodox Tewahdo Church</p>
        </div>
      )}
        </div>
    )
}

export default Welcome;
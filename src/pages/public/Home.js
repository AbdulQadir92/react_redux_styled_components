import { HomeStyled } from "../../styles/pages/public/Home.styled"
import { connect } from 'react-redux'


const Home = () => {

    return (
        <HomeStyled>
            <h1>Home</h1>
        </HomeStyled>
    )
}

export default connect(null, {})(Home);
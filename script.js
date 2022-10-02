/* Components */
function Image() 
{
    return (
        <div className="image">

        </div>
    )
}

function Main() 
{
    return (
        <div className="main">

        </div>
    )
}

function Footer() 
{
    return (
        <div className="footer">

        </div>
    )
}

function Card() 
{
    return (
        <div className="card">
            <Image />
            <Main />
            <Footer />
        </div>
    )
}
/* End Components */
/* Render Page */
const page = (
    <div className="container">
        <Card />
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
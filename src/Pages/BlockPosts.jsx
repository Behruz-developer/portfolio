import Projects from "../Components/Projects/Projects"
import Search from "../Components/Search/Search"

const BlockPosts = () => {
    return (
        <div className="blockposts">
            <Search />
            <div className="container">
                <div className="blockposts_box">
                    <h2 className="blockposts_title">Blogpostlar</h2>
                    <p className="blockposts_text">
                        Dasturlashga oid blogpostlarni o’qib, bilimingizni rivojlantiring!
                    </p>
                </div>
            </div>
            <Projects/>
        </div> 
    )
}

export default BlockPosts
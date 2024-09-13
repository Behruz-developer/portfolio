import React from 'react'
import universal from '../../assets/images/universal.png'
import { getData } from '../../Api/getProducts'
import { Link } from 'react-router-dom';

const Projects = () => {
    const { data } = getData();
    
    return (
        <div className='projects'>
            <div className="container">
                <div className="projects_box">
                    {data?.map(obj => (
                        <Link className="projects_card" key={obj.id} to={`/block_posts/${obj.id}`}>
                            <img src={obj.image} alt="" className="projects_card_img" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
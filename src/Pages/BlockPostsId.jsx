import React from 'react'
import { getData } from '../Api/getProducts'
import { useParams } from 'react-router-dom'

const BlockPostsId = () => {
    const { id } = useParams()
    const {data} = getData()

    const newGetData = data.find(obj => obj.id == id)
    return (
        <div className='blockpost'>
            <div className="container">
                <h2 className="blockpost_title">Qanday qilib dasturchi bo’lish mumkin?</h2>
                <div className="blockpost_box">
                    <div className="blockpost_card1">
                        <p className="blockpost_text">Hooks are a new addition in <span>React 16.8</span>. They let you use state and other React features without writing a class.</p>
                        <p className="blockpost_text">
                            This page describes the APIs for the built-in Hooks in React.
                        </p>
                        <p className="blockpost_text">
                            If you’re new to Hooks, you might want to check out the overview first. You may also find useful information in the frequently asked questions section.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockPostsId
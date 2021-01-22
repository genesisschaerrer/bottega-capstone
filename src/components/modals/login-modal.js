import React, {useState} from "react"
import ReactModal from 'react-modal'


const LoginModal = (props) => {


return (
    <ReactModal isOpen={props.modelIsOpen}>
        <h1>Im in a modal</h1>
    </ReactModal>
)
}

export default LoginModal
import React, { useState } from 'react';

function Form(props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: '',
    })
    const [member, setMember] = useState ({
        name: '',
        email: '',
        role: '',
    })

const submitHandler = (event) => {
    event.preventDefault();
    console.log("State: ", formState)
    console.log("Team: ", props.teamArray)
    props.setTeamArray([
        ...props.teamArray,
        formState
    ])
    setFormState({
        name: '',
        email: '',
        role: '',
    })

    console.log(teamArray)

}}
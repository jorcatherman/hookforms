import React from 'react';


const Form = props => {
    const { input, setinput } = props;
    const onChange = (e) => {
        if (e.target.name === 'firstname' && e.target.value.length < 3) {
            setinput({
                ...input, firstnameerror: 'First name should be longer than 2 characters', isfirstnameerror: true
            })

            // setinput(
            //     input => ({ ...input, firstnameerror: 'First name should be longer than 2 characters', isfirstnameerror: true }));
        } else {
            setinput(
                ({ ...input, isfirstnameerror: false }))
        }


        if (e.target.name === 'lastname' && e.target.value.length < 3) {
            setinput({
                lastnameerror: 'Last name should be longer than 2 characters', islastnameerror: true
            })

            // setinput(
            //     input => ({ ...input, lastnameerror: 'Last name should be longer than 2 characters', islastnameerror: true })
            // );
        } else {
            setinput(
                ({ ...input, islastnameerror: false }))
        }









        // else{
        //     setinput(
        //         input => ({...input, lastnameerror:null})
        //     )
        // }
        // if (e.target.name === 'email' && e.target.value.length < 2) {
        //     setinput({
        //         ...input,
        //         emailerror: 'Email must be longer than 2 characters.'
        //     })
        // }
        // else{
        //     setinput(
        //         input => ({...input, emailerror:null})
        //     )
        // }
        // if (e.target.name === 'password' && e.target.value.length < 9) {
        //     setinput({
        //         ...input,
        //         passworderror: 'Password must be longer than 8 characters.'
        //     })
        // }
        // else{
        //     setinput(
        //         input => ({...input, passworderror:null})
        //     )
        // }
        // if (e.target.name === 'confirmpw' && e.target.value.length < 9) {
        //     setinput({
        //         ...input,
        //         confirmpwerror: 'Password must be longer than 8 characters.'
        //     })
        // }
        // else{
        //     setinput(
        //         input => ({...input, confirmpwerror:null})
        //     )
        // }
        // if (e.target.name === 'confirmpw' && e.target.name !== 'password') {
        //     setinput({
        //         ...input,
        //         confirmerror: 'Password must match.'
        //     })
        // }
        // else{
        //     setinput(
        //         input => ({...input, confirmerror:null})
        //     )
        // }



        //  && e.target.name !== 'password'
        // setinput({
        //     ...inputs,
        //     [e.target.name]: e.target.value
        // });
    }

    const { firstnameerror, isfirstnameerror, islastnameerror, lastnameerror } = input;
    console.log(props);
    return (
        <form>

            <div>
                <label htmlFor='firstname'>First Name</label>
                <input onChange={onChange} type='text' name='firstname' />
                {isfirstnameerror && <p>{firstnameerror}</p>}

            </div>
            <div>
                <label htmlFor='lastname'>Last Name</label>
                <input onChange={onChange} type='text' name='lastname' />
                {islastnameerror && <p>{lastnameerror}</p>}
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input onChange={onChange} type='text' name='email' />
                <p>{firstnameerror}</p>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input onChange={onChange} type='password' name='password' />
                <p>{firstnameerror}</p>
            </div>
            <div>
                <label htmlFor='confirmpw'>Confirm Password</label>
                <input onChange={onChange} type='password' name='confirmpw' />
                <p>{firstnameerror}</p>
            </div>
        </form>
    )
};
export default Form;

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count + 1)
    );
    return count;
}
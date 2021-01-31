import axios from '../../axios'
import React, { useEffect, useState } from 'react'

function Payment() {

    function isDate(val){
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
    };

    function isObj(val) {
        return typeof val === 'object'
    }

    function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
            return JSON.stringify(val)
        } else {
            return val
        }
    }

    function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)
        // form.setAttribute('target', target)

        Object.keys(params).forEach(key => {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', key)
            input.setAttribute('value', stringifyValue(params[key]))
            form.appendChild(input)
        })

        return form
    }

    function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
    }


    const [dummy, setDummy] = useState()
    async function processPayment() {
        const buy = await axios.post(`/Pay`, {
            id: localStorage.getItem('user'),
            amount: localStorage.getItem('total')
        })
        console.log(buy.data);
        var details = {
            action:"https://securegw-stage.paytm.in/order/process",
            params: buy.data
        }
        post(details)
        setDummy(buy.data)
        return buy.data
    }
    useEffect(() => {
        processPayment()
    }, [])
    return (
        <div>
            {/* {dummy} */}
        </div>
    )
}

export default Payment

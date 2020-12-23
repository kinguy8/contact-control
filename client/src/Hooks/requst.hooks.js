import React, { useCallback, useEffect, useReducer } from 'react'

export const useRequest = () => {

    const request = useCallback(async (url, method = "GET", body = null, headers) => {
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const res = await fetch(url, { method, body, headers })
            const data = await res.json()
            return data
        } catch (e) {
        }
    }, [])


    return { request }
}
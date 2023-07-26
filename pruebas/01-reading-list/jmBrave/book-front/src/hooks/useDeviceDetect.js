import { useState, useEffect } from 'react'

import { LIST_NAME } from '../constant/constants'

export default function useDeviceDetect() {
    //TODO Change Name
    const [isMobile, setIsMobile] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const { BOOKS_SELECTED } = LIST_NAME

    const MOBILES =
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i

    useEffect(() => {
        if (window && document) {
            const { userAgent } = window.navigator
            const isUserAgentMobile = Boolean(userAgent.match(MOBILES))
            setIsMobile(isUserAgentMobile)
            const element = document.querySelector(`#${BOOKS_SELECTED}`)
            const observer = new IntersectionObserver(callback)
            observer.observe(element)
        }
    }, [])

    function callback(observerProps) {
        const [listBooksSelectedElement] = observerProps
        setIsVisible(listBooksSelectedElement.isIntersecting)
    }

    return { isMobile, isVisible }
}

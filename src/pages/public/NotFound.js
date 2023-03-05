import { useLayoutEffect } from "react"


const NotFound = () => {
    useLayoutEffect(() => {
        document.getElementById('navbar').style.display = 'none';
        // document.getElementById('sidebar').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
    }, [])

    return (
        <div>NotFound</div>
    )
}

export default NotFound
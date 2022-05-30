const useRequest = (url = '', options = null,massage = null) => {
    try {fetch(url, options)}
    catch (error) {console.error(error)}  
}
export default useRequest;
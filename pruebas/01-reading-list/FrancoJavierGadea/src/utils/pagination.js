


export function generatePagination(total, options = {}){

    const {
        path = '',

        origin = 'http://localhost',

        queryParams = {},

        size = total,

        currentPage = 1

    } = options;


    const pages = Array.from({length: total}).map((_, i) => i + 1);

    //Slice
    const n = Math.ceil(size / 2);

    const from = (() => {

        if(currentPage < n){

            return 0;
        } 

        if(currentPage >= n && currentPage <= total - n){

            return currentPage - n;
        }

        if(currentPage > total - n){

            return total - size;
        }
    })()

    const to = from + size;


    //Create links
    const links = pages.slice(from, to).map((page) => {

        const url = new URL(`${path}/${page}`, origin);

        Object.entries(queryParams).forEach(([key, value]) => {

            if(value) url.searchParams.set(key, value);
        })

        return {
            url,
            page
        };
    })

    return {
        links, 
        
        next: links.find((link) => link.page === currentPage + 1),

        prev: links.find((link) => link.page === currentPage - 1),

        current: links.find((link) => link.page === currentPage)
    };
}
const initialState = [
    {
        id: Math.random(),
        titlle: ' ',
        image: ' 2wCEAAkGBxMTEhUTExMVFhUXFhcXFxgYFxoaFxcYGhoYHxodGBceHSggGBolHRgXITEhJSkrLi4uFx81ODMtNygtLisBCgoKDg0OGxAQGi0mHyYrLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf',
        rating: 4,
    },
    {
        id: Math.random(),
        titlle: '',
        image: ' http://t1.gstatic.com/images?q=tbn:ANd9GcTM1ciOW5UjOLji5CxwIUglJz13fLQwH1M1vJ0k8EU-hN5oKUT6',
        rating: 2
    },
    {
        id: Math.random(),
        titlle: '',
        image: ' http://t0.gstatic.com/images?q=tbn:ANd9GcTTsDwf1sZYSWguZZ0hnVP1Tn84QYFyTDso_WoQp_TWRbp68YBu ',
        rating: 5
    },
    {
        id: Math.random(),
        title: '',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcROgVty40ZNXpyiop6cRdyOqVT2kTb_pf6M-8XJ4hZAEy0yxPWd ',
        rating: 1
    }]

const BooksListReducer = (state = initialState, action) => {
    if (action.type === 'ADDBOOKS') {
        return state.concat(action.movie)
    }
    if (action.type === 'EDITBOOKS') {
        return state.map(el => {
            if (el.id === action.id) {
                return action.book
            }
            return state
        })



    }
    if (action.type === 'DELETEBOOKS') {
        return state.filter((el, index) => index != action.id)




    }
    return state
}
export default BooksListReducer;
        
    

import Home from './home.controller'
import Posts from './posts.controller'
import NotFound from './notFound.controller'
import FormSuggestion from './formSuggestion.controller'

export const pages = {
    home: Home,
    posts: Posts,
    notFound: NotFound,
    form: FormSuggestion
    //formSuggestion: FormSuggestion,
}
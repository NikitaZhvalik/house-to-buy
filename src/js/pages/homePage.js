import filter from '../filter/filterController'
import listing from '../listing/listingConroller'

export default async function (state){
    await filter(state);
    listing();
}
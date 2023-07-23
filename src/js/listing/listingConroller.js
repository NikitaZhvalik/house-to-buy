export default function() {
    state.emitter.subscribe('event:render-listing', () => {
        console.log('emitter work');
    })
}
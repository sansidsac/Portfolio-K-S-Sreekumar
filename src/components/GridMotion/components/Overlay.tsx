const Overlay = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
            <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-4" style={{textShadow: '0 8px 48px #000, 0 2px 8px #000, 0 0 2px #000'}}>Hey There!</h1>
                <p className="text-2xl" style={{textShadow: '0 4px 32px #000, 0 1px 4px #000, 0 0 1px #000'}}>I am K S Sreekumar✌️</p>
            </div>
        </div>
    )
}
export default Overlay
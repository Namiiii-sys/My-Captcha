export default function Captcha() {
    const imageLocations = new Array(9) // Fixed syntax
        .fill(null)
        .map((_, index) => `/api/captcha-image/${index}.png`); // Fixed map function

    return (
        <div className="captcha">
    
            <div className="Captcha-images">
                {imageLocations.map((imageUrl, index) => (
                    <div key={index}> {/* Added missing key prop */}
                        <img src={imageUrl} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    );
}


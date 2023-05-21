import Blob1 from "../assets/blob 5.png"
import Blob2 from "../assets/blob 5-1.png"

export default function BlobBackground() {
    return (
        <div>
            <img src={Blob1} className="blob1" />
            <img src={Blob2} className="blob2" />
        </div>
    )
}
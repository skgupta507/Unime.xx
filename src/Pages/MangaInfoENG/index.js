import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { API } from "../../constants"
import InfoBannerENG from "../../Components/Content/InfoBannerENG"

function MangaInfoENG() {
	const { mangaID } = useParams()
	const [info, setInfo] = useState({})
	const [loading, setLoading] = useState(true)
	const [provider, setProvider] = useState("mangadex")
	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()
		axios
			.get(`${API}/manga-info/${mangaID}&${provider}`, {
				cancelToken: source.token,
			})
			.then((response) => {
				if (response.data.success) {
					setInfo(response.data.data)
					setLoading(false)
				}
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
		return () => {
			source.cancel()
		}
	}, [mangaID, provider])
	return (
		<div>
			<InfoBannerENG loading={loading} info={info} />
			{console.log(info)}
		</div>
	)
}

export default MangaInfoENG

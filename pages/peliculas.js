function PeliculasComponent() {
  return (
    <>
      <div className="relative h-0 pb-48 md:pb-56/25">
        <div id="video-container">
          <video
            controls
            id="video-player"
            poster="https://img.asmedia.epimg.net/resizer/ARM_cA9oRbPfPDF_8u8AZdqtWNA=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/ZRAF5WJMZFKNDPPSKN34KTSD5A.jpg"
          >
            <source
              src="https://dl.dropboxusercontent.com/s/as9rr67qiesznvc/Top.Gun.Maverick.2022.IMAX.2160p.BluRay.HEVC.TrueHD.7.1.Atmos%20%5BES%20-%20EN%5D-%20ElPepe%20Remix.mkv?dl=0"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
}

export default PeliculasComponent;

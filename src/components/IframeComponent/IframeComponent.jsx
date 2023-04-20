

export const IframeComponent = () => {
    const iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.314789902819!2d-64.2205756!3d-31.3843935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a5da3223a095987!2sShurima%20Sushi%20%26%20Wok!5e0!3m2!1ses-419!2sar!4v1665780692441!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}

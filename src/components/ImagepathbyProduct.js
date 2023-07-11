import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const ImageChecker = ({ imageUrl }) => {
  const [imageExists, setImageExists] = React.useState(false);

  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  const product = checkProduct();
  let fext = imageUrl.substr(imageUrl.lastIndexOf('.') + 1);
  let fileName = imageUrl.replace('.' + fext, '');
  let imgFilePath;
  if (currentLocale != 'ko') {
      imgFilePath = useBaseUrl('/img/' + fileName + product + '-' + currentLocale + '.' + fext);
  } else {
      imgFilePath = useBaseUrl('/img/' + fileName + product + '.' + fext);
  }

  React.useEffect(() => {
    const img = new Image();
    img.src = imgFilePath;

    const handleImageLoad = () => {
      setImageExists(true);
    };

    const handleImageError = () => {
      setImageExists(false);
    };

    img.addEventListener('load', handleImageLoad);
    img.addEventListener('error', handleImageError);

    return () => {
      img.removeEventListener('load', handleImageLoad);
      img.removeEventListener('error', handleImageError);
    };
  }, [imgFilePath]);

  console.log(imageExists);
  console.log("last: " + imgFilePath);

  const productImg = useBaseUrl('/img/' + fileName + product + '.' + fext);
  const defaultImg = useBaseUrl('/img/' + imageUrl);

  function onError(e) {
    if (currentLocale != 'ko') {
      e.target.src = '/' + currentLocale + '/img/' + fileName + product + '.' + fext;
    } else {
      e.target.src = '/img/' + fileName + product + '.' + fext;
    }
  }
  return (
    <div>
      {imageExists ? (
        <img src={imgFilePath} alt="이미지" onError={(e) => onError1(e)}/>
      ) : (
        <p>이미지를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default ImageChecker;
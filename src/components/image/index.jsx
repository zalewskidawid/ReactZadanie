import classNames from 'classnames';
import { useState } from 'react';

const Image = ({ src,
  alt = 'Image',
  className,
  width = 'auto',
  height = 'auto',
  placeholder,
  fallback,
  lazy = true,
  ...props }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
  
    const handleLoad = () => setIsLoaded(true);
    const handleError = () => {
      setIsError(true);
      setIsLoaded(false);
    };
    const combinedClassNames = classNames(className, {
      'image-loaded': isLoaded && !isError,
      'image-error': isError,
      'image-loading': !isLoaded && !isError,
    });
  
    return (
      <div
        style={{
          width: width === 'auto' ? undefined : width,
          height: height === 'auto' ? undefined : height,
        }}
        className="image-wrapper"
      >
        {!isLoaded && !isError && placeholder && (
          <div className="image-placeholder">{placeholder}</div>
        )}
  
        {isError && fallback && (
          <div className="image-fallback">{fallback}</div>
        )}
  
        {!isError && (
          <img
            src={src}
            alt={alt}
            className={combinedClassNames}
            width={width}
            height={height}
            loading={lazy ? 'lazy' : undefined}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        )}
      </div>
    );

};

export default Image;

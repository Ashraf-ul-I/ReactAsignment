import React from 'react';

const SkeletonComponent = () => {
    return (
        <div className="grid gap-4 m-4 sm:grid-cols-3">
            <div className="skeleton-item"></div>
            <div className="skeleton-item"></div>
            <div className="skeleton-item"></div>
        </div>
    );
};

export default SkeletonComponent;

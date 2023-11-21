module.exports = {

    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    
    // babel을 위한 설정
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },

    // js말고 다른 파일들을 위한 설정
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.(png|jpg|gif|svg)$': '<rootDir>/mocks/imageMock.js', // 여기서는 실제 모듈 대신 모킹 파일을 사용합니다.
      },

    testEnvironment: 'jsdom',
};

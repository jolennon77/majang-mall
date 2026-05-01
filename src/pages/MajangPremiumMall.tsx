import { useState, useEffect } from 'react';
import { ShoppingCart, Package, Info, X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const MajangPremiumMall = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0); // 슬라이드 상태 관리

    const heroSlides = [
        {
            id: 1,
            title: "마장동 상인을 위한\n가장 완벽한 온라인 플랫폼",
            desc: "박스부터 고기까지, 필요한 모든 것을 한 곳에서 해결하십시오.\n신속한 배송과 최고의 품질로 비즈니스의 격을 높여드립니다.",
            image: "/hero-main.png",
            buttonText: "전체 상품 보기"
        },
        {
            id: 2,
            title: "최상급 프리미엄 정육",
            desc: "엄선된 1++ 등급 한우부터 가성비 높은 수입육까지,\n전문가의 안목으로 고른 최상의 고기를 상인 특별가에 제공합니다.",
            image: "/hero-meat.png",
            buttonText: "정육 둘러보기"
        },
        {
            id: 3,
            title: "신선함을 지키는 포장재",
            desc: "보냉 스티로폼 박스, 특수 진공 포장지, 대용량 아이스팩 등\n육류 유통에 최적화된 맞춤형 패키징 솔루션을 만나보십시오.",
            image: "/hero-packaging.png",
            buttonText: "포장재 둘러보기"
        },
        {
            id: 4,
            title: "작업 효율을 높이는 부자재",
            desc: "정형칼부터 안전을 위한 위생 장화까지,\n작업자의 편의와 안전을 고려한 검증된 도구들입니다.",
            image: "/hero-tools.png",
            buttonText: "부자재 둘러보기"
        }
    ];

    // 샘플 상품 데이터 (육가공 부자재 및 프리미엄 정육)
    const products = [
        { id: 1, category: '부자재', name: '프리미엄 육가공 칼', price: '12,000', unit: '원', image: '/product-knife.jpg' },
        { id: 2, category: '부자재', name: '위생 작업 앞치마', price: '14,000', unit: '원', image: '/product-apron.webp' },
        { id: 3, category: '부자재', name: '작업 장화', price: '23,000', unit: '원', image: '/product-boots.jpg' },
        { id: 4, category: '정육', name: '프리미엄 한우 등심(100g)', price: '33,000', unit: '원', image: '/product-meat1.avif', isPremium: true },
        { id: 5, category: '정육', name: '프리미엄 한우 안심(100g) ', price: '33,000', unit: '원', image: '/product-meat2.jpg', isPremium: true },
        { id: 6, category: '박스/포장', name: '보냉 스티로폼 박스 대형', price: '2,500', unit: '개', image: '/product-box.jpg' },
        { id: 7, category: '박스/포장', name: '특수 진공 포장지 (100매)', price: '15,000', unit: '묶음', image: '/product-wrap.jpg' },
    ];

    // 화면에 그릴 카테고리 목록 정의
    const categories = [
        { id: 'meat', title: '프리미엄 정육', subtitle: 'Meat', filter: '정육' },
        { id: 'packaging', title: '박스 및 포장재', subtitle: 'Packaging', filter: '박스/포장' },
        { id: 'tools', title: '육가공 필수 부자재', subtitle: 'Tools', filter: '부자재' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handlePrevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    const handleNextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));

    const handleOrderClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        setOrderComplete(false);
    };

    // 상세페이지 이동 버튼 클릭 시 실행될 함수
    const handleGoToDetail = () => {
        alert("상세페이지는 준비중입니다.");
    };

    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 flex flex-col">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
                <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">

                    {/* 수정된 부분: 텍스트/아이콘 -> 로고 이미지 */}
                    <div className="flex items-center">
                        <a href="#">
                            <img
                                src="/logo2.webp"
                                alt="한국포장연합 로고"
                                className="h-12 md:h-18 w-auto object-contain"
                            />
                        </a>
                    </div>

                    <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
                        <a href="#" className="hover:text-black transition-colors">Home</a>
                        <a href="#" className="hover:text-black transition-colors">Meat (고기)</a>
                        <a href="#" className="hover:text-black transition-colors">Packaging (박스/포장)</a>
                        <a href="#" className="hover:text-black transition-colors">Tools (부자재)</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                        <button className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors">
                            상인 로그인
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative bg-[#1A202C] text-white h-[500px] md:h-[600px] overflow-hidden group">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        <div className="absolute inset-0 opacity-40">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = `/api/placeholder/1920/1080?text=Slide+${index + 1}`; }}
                            />
                        </div>
                        {/* 텍스트 줄바꿈을 위해 whitespace-pre-line 적용 */}
                        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col items-start justify-center">
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 whitespace-pre-line drop-shadow-md">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl font-light text-neutral-200 mb-10 max-w-2xl whitespace-pre-line drop-shadow-md">
                                {slide.desc}
                            </p>
                            <button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-neutral-200 transition-all transform hover:scale-105 shadow-xl">
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}

                {/* 좌우 화살표 (PC 마우스 오버 시 표시) */}
                <button
                    onClick={handlePrevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                    onClick={handleNextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* 슬라이드 하단 인디케이터(Dots) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentSlide ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </header>

            {/* Product Section */}
            <main className="max-w-6xl mx-auto px-6 py-24 flex-grow space-y-20">
                {categories.map((cat) => {
                    // 현재 카테고리에 해당하는 상품만 필터링
                    const filteredProducts = products.filter(p => p.category === cat.filter);

                    return (
                        <section key={cat.id} className="scroll-mt-24" id={cat.id}>
                            {/* 섹션 타이틀 */}
                            <div className="mb-8 border-b border-neutral-200 pb-4 flex items-baseline gap-3">
                                <h2 className="text-2xl font-bold tracking-tight">{cat.title}</h2>
                                <span className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">{cat.subtitle}</span>
                            </div>

                            {/* 상품 그리드 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#D9C4A9]">

                                        {/* 이미지 렌더링 영역 (아이콘 제거 및 img 태그 추가) */}
                                        <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-white"
                                                onError={(e) => {
                                                    // 이미지가 없을 때 엑스박스 대신 띄워줄 임시 이미지 처리
                                                    e.target.src = "/api/placeholder/400/300";
                                                }}
                                            />
                                            {/* 프리미엄 뱃지 */}
                                            {product.isPremium && (
                                                <span className="absolute top-3 left-3 bg-yellow-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-wider">
                          PREMIUM
                        </span>
                                            )}
                                        </div>

                                        {/* 상품 정보 영역 */}
                                        <div className="p-5 flex flex-col h-[140px]">
                                            <h3 className="text-lg font-bold mb-1 line-clamp-1">{product.name}</h3>
                                            <div className="flex items-end justify-between mt-auto">
                                                <div>
                                                    <span className="text-xl font-extrabold">{product.price}</span>
                                                    <span className="text-sm text-neutral-500 ml-1">/{product.unit}</span>
                                                </div>
                                                <button
                                                    onClick={() => handleOrderClick(product)}
                                                    className="bg-[#1A202C] text-white px-4 py-1.5 rounded-md text-xs font-bold hover:bg-neutral-700 transition-colors"
                                                >
                                                    상인 회원가
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </main>

            {/* Footer Section with Image */}
            <footer className="bg-[#1A202C] text-white mt-auto">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">

                        <div className="flex-1 w-full">
                            <div className="flex items-center gap-2 mb-6">
                                <Package className="w-6 h-6 text-white" />
                                <span className="text-xl font-bold tracking-tight">한국포장연합</span>
                            </div>
                            <div className="text-sm text-neutral-400 space-y-2 font-light">
                                <p>위너컴퍼니 | 사업자번호: 455-04-03016</p>
                                <p>서비스 약관 | 개인정보처리방침 | 주소 : 경기도 용인시</p>
                                <p>문의 INFO | 연락처: 031-1234-5678 | mail@gmail.com</p>
                            </div>
                        </div>

                        <div className="w-full max-w-sm relative z-10">
                            <img
                                src="/logo2.jpg"
                                alt="한국포장연합 위너컴퍼니 명함"
                                className="w-full h-auto rounded-lg shadow-2xl border border-neutral-700 object-contain bg-white"
                            />
                        </div>

                    </div>
                </div>
            </footer>

            {/* Order & Payment Modal (유지) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold tracking-tight">회원 특별가 안내</h3>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="bg-neutral-50 rounded-xl p-5 mb-6 border border-neutral-100">
                                <p className="text-sm font-semibold text-neutral-500 mb-1">{selectedProduct?.category}</p>
                                <p className="text-lg font-bold mb-5">{selectedProduct?.name}</p>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-neutral-400">
                                        <span className="text-sm">일반 판매가</span>
                                        <span className="text-sm line-through">{selectedProduct?.normalPrice}원</span>
                                    </div>
                                    <div className="flex justify-between items-center text-red-500">
                                        <span className="text-sm font-bold flex items-center gap-1">
                                            <Percent className="w-4 h-4" /> 상인 전용 할인
                                        </span>
                                        <span className="text-sm font-bold">{selectedProduct?.discount}% ↓</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 mt-2 border-t border-neutral-200">
                                        <span className="text-base font-bold text-neutral-900">상인 회원가</span>
                                        <span className="text-2xl font-extrabold text-[#1A202C]">{selectedProduct?.price}<span className="text-base font-medium ml-1">원</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-blue-50 text-blue-900 p-4 rounded-xl mb-8">
                                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p className="text-sm font-medium leading-relaxed">
                                    해당 가격은 사업자 인증을 완료한 <strong>상인 회원 전용 혜택가</strong>입니다. 상세페이지에서 더 자세한 정보를 확인하세요.
                                </p>
                            </div>

                            <button
                                onClick={handleGoToDetail}
                                className="w-full bg-[#1A202C] text-white py-4 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-colors"
                            >
                                상세페이지로 이동
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MajangPremiumMall;
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useState, useEffect, useRef } from "react";
import CarouselCard from "./CarouselCard";
import React from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrls, selectUrls, selectStatus } from "./OfferCarouselSlice";

const OfferCarousel = () => {
  const CARD_WIDTH = 390;
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const flatlistRef = React.useRef(null);
  const timer = React.useRef(null);

  // Animasyon başlatılır
  useEffect(() => {
    startAnimation();
    return () => {
      // Sayfadan ayrılırken animasyon durdurulur
      clearInterval(timer.current);
    };
  }, []);

  // ActiveDotIndex değişimini almak için useEffect kullanıyoruz
  // Her activeDotIndex değişiminde animasyon durdurulur
  // Yeni activeDotIndex'e göre animasyon başlatılır
  useEffect(() => {
    clearInterval(timer.current);
    startAnimation();
    // Deps array'e activeDotIndex'i ekliyoruz
  }, [activeDotIndex]);

  const goToNextPage = () => {
    // Son sayfaya kadar sürekli sonraki sayfaya geç
    if (activeDotIndex < 3) {
      flatlistRef.current.scrollToIndex({
        index: activeDotIndex + 1,
        animated: true,
      });
      // Son sayfa ise başa geri dön
    } else {
      flatlistRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
    }
  };

  const startAnimation = () => {
    timer.current = setInterval(() => goToNextPage(), 3000);
  };

  const dispatch = useDispatch();
  const urls = useSelector(selectUrls);

  useEffect(() => {
    dispatch(fetchUrls());
  }, [dispatch]);

  // const [urls, setUrls] = useState([]);
  // const [itemRefs, setItemRefs] = useState([]);
  // useEffect(() => {
  //   const offersDir = ref(storage, "offers");
  //   // Klasördeki tüm dosyaları listeliyorum
  //   listAll(offersDir).then((res) => {
  //     // State güncelliyorum
  //     setItemRefs(res.items);
  //     // Dosyaların referanslarını kullanarak download url'lerini alıyorum
  //     res.items.forEach((itemRef) => {
  //       getDownloadURL(itemRef).then((url) => {
  //         setUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  //firebase collection ile
  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const usersQuery = collection(db, "carouselImg");
  //   onSnapshot(usersQuery, (snapshot) => {
  //     let cards = [];
  //     snapshot.forEach((doc) => {
  //       cards.push(doc.data());
  //       // console.log(doc.data());
  //     });
  //     setLoading(false);
  //     setImages(cards);
  //     // console.log(cards);
  //   });
  // }, []);

  return (
    <FlatList
      ref={flatlistRef}
      // Kart listesi
      data={urls}
      // Render edilecek component (Card)
      renderItem={({ item, index }) => <CarouselCard item={item} />}
      // Listeleme için key
      keyExtractor={(item, index) => index.toString()}
      // Yatayda dizmek için
      horizontal={true}
      // ListView'ın container stili
      // Native scroll indicator'ı kaldırmak için
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      snapToOffsets={urls.map((_, i) => i * CARD_WIDTH)}
      // Hızlı kaydırma için
      decelerationRate={"normal"}
      // Scroll edildiğinde çalışır
      onScroll={(e) => {
        const newIndex = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);
        setActiveDotIndex(newIndex);
      }}
    />
  );
};

export default OfferCarousel;

const styles = StyleSheet.create({
  offerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkslategray",
  },
  imgCounterContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8D9DA",
    height: 20,
    width: 50,
    borderRadius: 20,
  },
  activeImageCount: {
    fontSize: 12,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  dot: {
    backgroundColor: "#efefef",
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: "#333",
  },
});

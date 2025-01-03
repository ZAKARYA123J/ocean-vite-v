// useSaveScrollPosition.js


export function useSaveScrollPosition() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
}

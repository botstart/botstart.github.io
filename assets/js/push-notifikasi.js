    <script>
        // Meminta izin notifikasi secara otomatis saat halaman dimuat
        document.addEventListener("DOMContentLoaded", function () {
            if ('Notification' in window) {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        // Izin diberikan, Anda dapat mengirim notifikasi di sini
                        new Notification("Izin Notifikasi Diberikan", {
                            body: "Anda akan menerima notifikasi perubahan pada website."
                        });
                    }
                });
            }
        });

        // Simulasi perubahan pada website (contoh)
        setTimeout(function () {
            // Mengirim notifikasi ketika ada perubahan
            if (Notification.permission === 'granted') {
                new Notification("Perubahan pada Website", {
                    body: "Ada perubahan terbaru pada website."
                });
            }
        }, 5000); // Contoh, notifikasi akan dikirim setelah 5 detik
    </script

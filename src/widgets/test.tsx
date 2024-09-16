'use client';
import { motion } from 'framer-motion';

const config = [
    { type: 'link', href: '#', label: 'Home' },
    { type: 'lines' },
    { type: 'link', href: '#', label: 'About' },
    { type: 'lines' },
    { type: 'link', href: '#', label: 'Services' },
    { type: 'lines' },
    { type: 'link', href: '#', label: 'Pricing' },
];

export const SideLines = () => {
    return (
        <header className="fixed min-w-20 right-0 top-0 flex h-screen flex-col items-end justify-between py-4 pl-8">
            <nav className='w-full h-full'>
                {config.map((item, index) => {
                    if (item.type === 'link') {
                        return (
                            <motion.a key={index} href={item.href} className="group relative">
                                <motion.div
                                    className="group relative bg-neutral-500 transition-colors hover:bg-indigo-300"
                                    style={{ height: '2px', width: '10%' }} // Начальная ширина в процентах
                                    initial={{ width: '10%' }}
                                    whileHover={{ width: '17%' }} // При наведении расширяется до 17% экрана
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <span
                                        className="absolute left-0 top-0 z-10 w-full pt-2 font-bold uppercase text-neutral-500 transition-colors group-hover:text-indigo-300"
                                        style={{ opacity: 1 }}
                                    >
                                        {item.label}
                                    </span>
                                </motion.div>
                            </motion.a>
                        );
                    } else if (item.type === 'lines') {
                        return (
                            <div key={index} className="flex flex-col items-end space-y-2">
                                {Array(6)
                                    .fill(0)
                                    .map((_, lineIndex) => (
                                        <motion.div
                                            key={lineIndex}
                                            className="relative bg-neutral-500"
                                            style={{ height: '2px', width: '5%' }} // Начальная ширина полосок
                                            initial={{ width: '5%' }}
                                            whileHover={{ width: '10%' }} // При наведении растягиваются до 8%
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        />
                                    ))}
                            </div>
                        );
                    }
                })}
            </nav>
        </header>
    );
};

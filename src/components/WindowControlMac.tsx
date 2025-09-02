import * as motion from "motion/react-client"

export function WindowControlMac() {
  return (
    <div className="flex gap-2">
      <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-3 h-3 rounded-full cursor-pointer bg-red-500"
      >
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-3 h-3 rounded-full cursor-pointer bg-yellow-400"
      >
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-3 h-3 rounded-full cursor-pointer bg-green-600"
      >
      </motion.div>
    </div>
  );
};